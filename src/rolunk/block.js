/* eslint-disable linebreak-style */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/jsx-key */
//  Import CSS.
import './editor.scss';
import './style.scss';

// constants
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks;
const {
	InspectorControls,
	ColorPalette,
	MediaUpload,
	InnerBlocks,
} = wp.blockEditor;
const {
	PanelBody,
	IconButton,
} = wp.components;
const ALLOWED_BLOCKS = [ 'core/button', 'core/paragraph', 'core/heading' ];

// register block
registerBlockType( 'etterem-blocks/rolunk', {
	title: __( 'Rolunk' ),
	icon: 'admin-page',
	category: 'weart',
	keywords: [
		__( 'etterem' ),
		__( 'rolunk' ),
		__( 'weart' ),
	],

	// attributes
	attributes: {
		sideImage: {
			type: 'string',
			default: 'https://placeimg.com/600/600/people',
		},
		sideImageColor: {
			type: 'string',
			default: 'blue',
		},
		sideImageColorHeight: {
			type: 'number',
			default: '100%',
		},
	},

	edit: ( { attributes, setAttributes } ) => {
		// attributes
		const {
			sideImage,
			sideImageColor,
		} = attributes;

		// functions
		const onSelectImage = ( newItem ) => {
			setAttributes( { sideImage: newItem.sizes.full.url } );
		};
		const onsideImageColorChange = ( newItem ) => {
			setAttributes( { sideImageColor: newItem } );
		};

		// return
		return ( [
			<InspectorControls>
				<PanelBody title={ 'Beállítások' }>
					<p><strong>Kép háttérszín:</strong></p>
					<ColorPalette value={ sideImageColor } onChange={ onsideImageColorChange } />
				</PanelBody>
			</InspectorControls>,
			<div className="weart-rolunk">
				<div className="text">
					<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
				</div>
				<div className="image">
					<img src={ sideImage } alt="" />
					<MediaUpload
						onSelect={ onSelectImage }
						type="image"
						value={ sideImage }
						render={ ( { open } ) => (
							<IconButton
								className="editor-media-placeholder__button is-button is-default is-large"
								icon="upload"
								onClick={ open }>
								Kép feltöltése
							</IconButton>
						) } />
					<div className="rolunk-shadow" style={ { background: sideImageColor } }></div>
				</div>
			</div>,
		] );
	},

	save: ( { attributes } ) => {
		// attributes
		const {
			sideImage,
			sideImageColor,
		} = attributes;

		// return
		return (
			<div className="weart-rolunk">
				<div className="text">
					<InnerBlocks.Content />
				</div>
				<div className="image">
					<img src={ sideImage } alt="" />
					<div className="rolunk-shadow" style={ { background: sideImageColor } }></div>
				</div>
			</div>
		);
	},

} );
