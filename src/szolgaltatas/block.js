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
registerBlockType( 'etterem-blocks/szolgaltatas', {
	title: __( 'Szolgáltatás' ),
	icon: 'admin-page',
	category: 'weart',
	keywords: [
		__( 'etterem' ),
		__( 'rolunk' ),
		__( 'weart' ),
	],

	// attributes
	attributes: {
		image: {
			type: 'string',
			default: 'https://placeimg.com/600/600/people',
		},
		bg: {
			type: 'string',
			default: '#f5f5f5',
		},
		edge: {
			type: 'number',
			default: '#f5f5f5',
		},
		border: {
			type: 'number',
			default: 'navy',
		},
		title: {
			type: 'string',
			source: 'html',
			selector: 'h3',
		},
		body: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
	},

	edit: ( { attributes, setAttributes } ) => {
		// attributes
		const {
			image,
			bg,
			edge,
			border,
			title,
			body,
		} = attributes;

		// functions
		const onSelectImage = ( newItem ) => {
			setAttributes( { image: newItem.sizes.full.url } );
		};
		const onChangeBg = ( newItem ) => {
			setAttributes( { bg: newItem } );
		};
		const onChangeEdge = ( newItem ) => {
			setAttributes( { edge: newItem } );
		};
		const onChangeBorder = ( newItem ) => {
			setAttributes( { border: newItem } );
		};
		const onChangeTitle = ( newItem ) => {
			setAttributes( { title: newItem } );
		};
		const onChangeBody = ( newItem ) => {
			setAttributes( { body: newItem } );
		};

		// return
		return ( [
			<InspectorControls>
				<PanelBody title={ 'Színek' }>
					<p><strong>Háttér:</strong></p>
					<ColorPalette value={ bg } onChange={ onChangeBg } />
					<p><strong>Háttér széle:</strong></p>
					<ColorPalette value={ edge } onChange={ onChangeEdge } />
					<p><strong>Keret:</strong></p>
					<ColorPalette value={ border } onChange={ onChangeBorder } />
				</PanelBody>
			</InspectorControls>,
			<div className="weart-blocks weart-szolgaltatas" style={ { borderColor: border } }>
				<div className="inner" style={ { background: bg, borderColor: edge } }>
					<div className="image">
						<img src={ image } alt="" />
						<MediaUpload
							onSelect={ onSelectImage }
							type="image"
							value={ image }
							render={ ( { open } ) => (
								<IconButton
									className="editor-media-placeholder__button is-button is-default is-large"
									icon="upload"
									onClick={ open }>
									Kép feltöltése
								</IconButton>
							) } />
					</div>
					<div className="text">
						<RichText key="editable"
							tagName="h3"
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
				</div>
			</div>,
		] );
	},

	save: ( { attributes } ) => {
		// attributes
		const {
			image,
			title,
			body,
			border,
			bg,
			edge,
		} = attributes;

		// return
		return (
			<div className="weart-blocks weart-szolgaltatas" style={ { borderColor: border } }>
				<div className="inner" style={ { background: bg, borderColor: edge } }>
					<div className="image">
						<img src={ image } alt="" />
					</div>
					<div className="text">
						<h3>{ title }</h3>
						<RichText.Content tagName="p" value={ body } />
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		);
	},

} );
