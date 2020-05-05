//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; 

registerBlockType( 'etterem-blocks/intro', {
	title: __( 'Etterem Intro' ),
	icon: 'dashicons-admin-page',
	category: 'layout',
	keywords: [
		__( 'etterem' ),
		__( 'intro' ),
		__( 'weart' ),
	],
	supports: {
		align: ['full']
	},

	// attributes
	props: {
		title: {
			type: 'string',
			source: 'html',
		}
	},

	edit: ( props ) => {
		// Creates a <p class='wp-block-cgb-block-etterem'></p>.
		return (
			<div className={ props.className }>
				<p>— Hello from the backend.</p>
				<p>
					CGB BLOCK: <code>etterem</code> is a new Gutenberg block
				</p>
				<p>
					It was created via{ ' ' }
					<code>
						<a href="https://github.com/ahmadawais/create-guten-block">
							create-guten-block
						</a>
					</code>.
				</p>
			</div>
		);
	},

	save: ( props ) => {
		return (
			<div className={ props.className }>
				<p>— Hello from the frontend.</p>
				<p>
					CGB BLOCK: <code>etterem</code> is a new Gutenberg block.
				</p>
				<p>
					It was created via{ ' ' }
					<code>
						<a href="https://github.com/ahmadawais/create-guten-block">
							create-guten-block
						</a>
					</code>.
				</p>
			</div>
		);
	},


} );
