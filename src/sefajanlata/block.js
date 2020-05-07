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
	MediaUpload,
	InnerBlocks,
} = wp.blockEditor;
const {
	PanelBody,
	IconButton,
	ToggleControl,
} = wp.components;
const ALLOWED_BLOCKS = [ 'core/button' ];

// register block
registerBlockType( 'etterem-blocks/sef-ajanlata', {
	title: __( 'Séf Ajánlata' ),
	icon: 'admin-page',
	category: 'weart',
	keywords: [
		__( 'etterem' ),
		__( 'sef' ),
		__( 'ajanlat' ),
		__( 'szezonalis' ),
		__( 'weart' ),
	],

	// attributes
	attributes: {
		image: {
			type: 'string',
			default: 'https://placeimg.com/600/600/',
		},
		direction: {
			type: 'boolean',
			default: true,
		},
		subtitle: {
			type: 'string',
			source: 'html',
			selector: 'h4',
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
		// functions
		const onSelectImage = ( newItem ) => {
			setAttributes( { image: newItem.sizes.full.url } );
		};
		const onChangeSubtitle = ( newItem ) => {
			setAttributes( { subtitle: newItem } );
		};
		const onChangeTitle = ( newItem ) => {
			setAttributes( { title: newItem } );
		};
		const onChangeBody = ( newItem ) => {
			setAttributes( { body: newItem } );
		};

		let dir = 'column';
		if ( ! attributes.direction ) {
			dir = 'column-reverse';
		} else {
			dir = 'column';
		}

		// return
		return ( [
			<InspectorControls>
				<PanelBody title={ 'Beállítások' }>
					<ToggleControl
						label="Irány"
						help={ attributes.direction ? 'Kép felül' : 'Kép alul' }
						checked={ attributes.direction }
						onChange={ ( value ) => {
							setAttributes( { direction: value } );
						} }
					/>
				</PanelBody>
			</InspectorControls>,
			<div className="weart-sef-ajanlata" style={ { flexDirection: dir } }>
				<div className="image">
					<img src={ attributes.image } alt="" />
					<MediaUpload
						onSelect={ onSelectImage }
						type="image"
						value={ attributes.image }
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
						tagName="h4"
						placeholder="Alcím"
						value={ attributes.subtitle }
						onChange={ onChangeSubtitle } />
					<RichText key="editable"
						tagName="h3"
						placeholder="Cím"
						value={ attributes.title }
						onChange={ onChangeTitle } />
					<RichText key="editable"
						tagName="p"
						placeholder="Szöveg"
						value={ attributes.body }
						onChange={ onChangeBody } />
					<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
				</div>
			</div>,
		] );
	},

	save: ( { attributes } ) => {
		let dir = 'column';
		if ( ! attributes.direction ) {
			dir = 'column-reverse';
		} else {
			dir = 'column';
		}

		// return
		return (
			<div className="weart-sef-ajanlata" style={ { flexDirection: dir } }>
				<div className="image">
					<img src={ attributes.image } alt="" />
				</div>
				<div className="text">
					<h4>{ attributes.subtitle }</h4>
					<h3>{ attributes.title }</h3>
					<RichText.Content tagName="p" value={ attributes.body } />
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},

} );
