<<?php
// call the register
add_action( 'plugins_loaded', 'register_weart_blog_block' );

// register the blog block
function register_weart_blog_block(){
	register_block_type( 'etterem-blocks/blog', [
		'render_callback' => 'render_weart_blog_block'
	]);
}

// render block
function render_weart_blog_block( $attributes ){
	$posts = get_posts(
		[
			'category' => $attributes[ 'selectedCategory' ],
			// 'posts_per_page' => $attributes[ 'postsPerPage' ]
		]
	);

	if( empty($posts) ){
		return '<p>No posts</p>';
	};

	ob_start();
	foreach($posts as $post){
		echo '<h2>'.$post->post_title.'</h2>';
		echo '<p>'.$post->post_excerpt.'</p>';
	};
	return ob_get_clean();

}

