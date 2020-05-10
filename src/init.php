<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * Assets enqueued:
 * 1. blocks.style.build.css - Frontend + Backend.
 * 2. blocks.build.js - Backend.
 * 3. blocks.editor.build.css - Backend.
 */
function etterem_cgb_block_assets() {
	// Register block styles for both frontend + backend.
	wp_register_style(
		'etterem-cgb-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		is_admin() ? array( 'wp-editor' ) : null, // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);

	// Register block editor script for backend.
	wp_register_script(
		'etterem-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components' ), // Dependencies, defined above.
		null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Register block editor styles for backend.
	wp_register_style(
		'etterem-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);

	// WP Localized globals. Use dynamic PHP stuff in JavaScript via `cgbGlobal` object.
	wp_localize_script(
		'etterem-cgb-block-js',
		'cgbGlobal', // Array containing dynamic data for a JS Global.
		[
			'pluginDirPath' => plugin_dir_path( __DIR__ ),
			'pluginDirUrl'  => plugin_dir_url( __DIR__ ),
			// Add more data here that you want to access from `cgbGlobal` object.
		]
	);

	/**
	 * Register Gutenberg block on server-side.
	 */
	register_block_type(
		'cgb/block-etterem', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'etterem-cgb-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'etterem-cgb-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'etterem-cgb-block-editor-css',
			// render with
			'render_callback' => 'render_weart_blog_block'
		)
	);

	// server side rendered block register
	register_block_type(
        'etterem-blocks/blog',
        array(
            'attributes' => array(
                'selectedCategory' => array(
                    'type' => 'string',
                ),
                'title' => array(
                    'type' => 'string',
                ),
                'subtitle' => array(
                    'type' => 'string',
                ),
            ),
            'render_callback' => 'render_weart_blog_block',
        )
    );
}
add_action( 'init', 'etterem_cgb_block_assets' );

// create custom category for blocks
function weart_create_block_category( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'weart',
				'title' => __( 'Weart', 'etterem' ),
			),
		)
	);
}
add_filter( 'block_categories', 'weart_create_block_category', 10, 2);


// include( plugin_dir_path(__FILE__).'blog/block.php' );
// server side rendering
function render_weart_blog_block( $attributes ) {
    // get our 3 most recent posts using wp_get_recent_posts
    $recent_posts = wp_get_recent_posts(
        array(
			'numberposts' => 3,
			'category' => $attributes[ 'selectedCategory' ],
            'post_stats'  => 'publish',
        )
    );

	$title_of_block = sprintf(
		'<div class="title_of_block">
			<h4>%1$s</h4>
			<h2>%2$s</h2>
		</div>',
		$attributes[ 'subtitle' ],
        $attributes[ 'title' ]
    );

    // Put together markup for each post to output
    foreach ( $recent_posts as $post ) {
        $post_id = $post['ID'];

        $list_item_markup .= sprintf(
			'<div class="item">
				<h2 class="title">
					<a href="%1$s">%2$s</a>
				</h2>
				<div class="excerpt">
					%3$s
				</div>
			</div>',
            esc_url( get_permalink( $post_id ) ), /* link */
            esc_html( get_the_title( $post_id ) ), /* title */
            esc_html( get_the_excerpt( $post_id ) ) /* excerpt */
        );
    }

    // Built out our final output
    $block_content = sprintf(
		'<div class="weart-blocks weart-blog">
			%1$s
			<div class="grid">
				%2$s
			</div>
		</div>',
		$title_of_block,
        $list_item_markup
    );

    return $block_content;
}