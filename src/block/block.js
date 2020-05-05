//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; 
const { 
	RichText,
	InspectorControls,
	ColorPalette,
	MediaUpload,
	InnerBlocks,
	BlockControls,
	AlignmentToolbar
} = wp.editor;
const { 
	PanelBody, 
	IconButton, 
	RangeControl 
} = wp.components;
const ALLOWED_BLOCKS = [ 'core/button' ];
const validAlignemnts = [ 'full' ];

registerBlockType( 'etterem-blocks/intro', {
	title: __( 'Etterem Intro' ),
	icon: 'admin-page',
	category: 'weart',
	keywords: [
		__( 'etterem' ),
		__( 'intro' ),
		__( 'weart' ),
	],
	supports: {
		align: [ 'full' ]
	},

	// attributes
	attributes: {
		align: {
			type: 'string',
			default: 'full'
		},
		title: {
			type: 'string',
			source: 'html',
			selector: 'h2'
		},
		titleColor: {
			type: 'string',
			default: 'white'
		},
		subtitle: {
			type: 'string',
			source: 'html',
			selector: 'h4'
		},
		subtitleColor: {
			type: 'string',
			default: 'white'
		},
		alignment: {
			type: 'string',
			default: 'none'
		},
		backgroundImage: {
			type: 'string',
			default: null 
		},
		overlayColor: {
			type: 'string',
			default: 'black'
		},
		overlayOpacity: {
			type: 'number',
			default: 0.3
		}
	},

	edit: ({ attributes, setAttributes }) => {
		// attributes
		const {
			title,
			titleColor,
			subtitle,
			subtitleColor,
			backgroundImage,
			overlayColor,
			overlayOpacity,
			alignment
		} = attributes;	

		// functions
		const onChangeAlign = ( newItem ) => { setAttributes( { alignment: newItem } ) };
		const onChangeTitle = ( newItem ) => { setAttributes( { subtitle: newItem } ) };
		const onChangeSubtitle = ( newItem ) => { setAttributes( { subtitle: newItem } ) };

		// return
		return (
			<div className="weart-intro">
				{
					<BlockControls>
						<AlignmentToolbar value={ alignment } 
							onChange={ onChangeAlign }
						/>
					</BlockControls>
				}
				<div className="container">
					<RichText key="editable"
						tagName="h4"
						placeholder="Kis Cím Szövege"
						value={ subtitle }
						onChange={ onChangeSubtitle }
						style={ { color: subtitleColor } }	/>
					<RichText key="editable"
						tagName="h2"
						placeholder="Nagy Cím Szövege"
						value={ title }
						onChange={ onChangeTitle }
						style={ { color: titleColor } }	/>
					<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS }/>
				</div>
			</div>
		);
	},

	save: ({ attributes }) => {
		// attributes
		const {
			title,
			titleColor,
			subtitle,
			subtitleColor,
			backgroundImage,
			overlayColor,
			overlayOpacity,
			alignment
		} = attributes;	

		// return
		return (
			<div className="weart-intro">
				<div className="container">
					<h4 style={ { color: subtitleColor } }>
						{ subtitle }
					</h4>
					<h2 style={ { color: titleColor } }>
						{ title }
					</h2>
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},


} );
