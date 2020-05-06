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
	RichText,
	InspectorControls,
	ColorPalette,
	MediaUpload,
	InnerBlocks,
} = wp.blockEditor;
const {
	PanelBody,
	IconButton,
} = wp.components;
const ALLOWED_BLOCKS = [ 'core/button' ];

// register block
registerBlockType( 'etterem-blocks/rolunk', {
	title: __( 'Rólunk' ),
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
		subtitle: {
			type: 'sting',
			source: 'html',
			slector: 'h4',
		},
		title: {
			type: 'sting',
			source: 'html',
			slector: 'h2',
		},
		body: {
			type: 'sting',
			source: 'html',
			slector: 'p',
		},
	},

	edit: ( { attributes, setAttributes } ) => {
		// attributes
		const {
			sideImage,
			sideImageColor,
			subtitle,
			title,
			body,
		} = attributes;

		// functions
		const onSelectImage = ( newItem ) => {
			setAttributes( { sideImage: newItem.sizes.full.url } );
		};
		const onsideImageColorChange = ( newItem ) => {
			setAttributes( { sideImageColor: newItem } );
		};
		const onChangeSubtitle = ( newItem ) => {
			setAttributes( { subtitle: newItem } );
		};
		const onChangeTitle = ( newItem ) => {
			setAttributes( { title: newItem } );
		};
		const onChangeBody = ( newItem ) => {
			setAttributes( { title: newItem } );
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
					<RichText key="editable"
						tagName="h4"
						placeholder="Alcím"
						value={ subtitle }
						onChange={ onChangeSubtitle } />
					<RichText key="editable"
						tagName="h2"
						placeholder="Cím"
						value={ title }
						onChange={ onChangeTitle } />
					<RichText key="editable"
						tagName="p"
						placeholder="Szöveg"
						value={ body }
						onChange={ onChangeBody } />
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
			subtitle,
			title,
			body,
		} = attributes;

		// return
		return (
			<div className="weart-rolunk">
				<div className="text">
					<h4>{ subtitle }</h4>
					<h2>{ title }</h2>
					<p>{ body }</p>
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
