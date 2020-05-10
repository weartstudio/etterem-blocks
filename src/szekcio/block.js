/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-key */
//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks;
const {
	InspectorControls,
	MediaUpload,
	InnerBlocks,
} = wp.editor;
const {
	PanelBody,
	IconButton,
} = wp.components;
const MY_TEMPLATE = [
	[ 'core/heading', { placeholder: 'Alcím', level: 4  } ],
	[ 'core/heading', { placeholder: 'Cím' } ],
	[ 'core/columns', {} ],
];

registerBlockType( 'etterem-blocks/three', {
	title: __( 'Szekció' ),
	icon: 'admin-page',
	category: 'weart',
	keywords: [
		__( 'etterem' ),
		__( 'intro' ),
		__( 'weart' ),
	],
	supports: {
		align: [ 'full' ],
	},

	// attributes
	attributes: {
		align: {
			type: 'string',
			default: 'full',
		},
		backgroundImage: {
			type: 'string',
			default: '',
		},
	},

	edit: ( { attributes, setAttributes } ) => {
		// return
		return ( [
			<InspectorControls style={ { marginBottom: '40px' } }>
				<PanelBody title={ 'Beállítások' }>
					<p><strong>Válassz háttérképet:</strong></p>
					<MediaUpload
						onSelect={ ( value ) => {
							setAttributes( { backgroundImage: value.sizes.full.url } );
						} }
						type="image"
						value={ attributes.backgroundImage }
						render={ ( { open } ) => (
							<IconButton
								className="editor-media-placeholder__button is-button is-default is-large"
								icon="upload"
								onClick={ open }>
								Háttérkép
							</IconButton>
						) } />
				</PanelBody>
			</InspectorControls>,
			<div className="weart-blocks weart-section" style={ {
				backgroundImage: `url( ${ attributes.backgroundImage } )`,
			} }>
				<div className="container">
					<InnerBlocks
						template={ MY_TEMPLATE } />
				</div>
			</div>,
		] );
	},

	save: ( { attributes } ) => {
		// return
		return (
			<div className="weart-blocks weart-section" style={ {
				backgroundImage: `url( ${ attributes.backgroundImage } )`,
			} } >
				<div className="container">
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},

} );
