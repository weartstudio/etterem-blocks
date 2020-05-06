/* eslint-disable react/jsx-key */
/*eslint linebreak-style: ["error", "windows"]*/
//  Import CSS.
import './editor.scss';
import './style.scss';

// Import js functions
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	InspectorControls,
	RichText,
	ColorPalette,
	InnerBlocks,
} = wp.blockEditor;
const {
	PanelBody,
} = wp.components;

// Reguister the block
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
		title: {
			type: 'string',
			source: 'html',
			selector: 'h2',
		},
		titleColor: {
			type: 'string',
			default: 'black',
		},
		subtitle: {
			type: 'string',
			source: 'html',
			selector: 'h4',
		},
		subtitleColor: {
			type: 'string',
			default: 'orange',
		},
		imageShadowColor: {
			type: 'string',
			default: 'blue',
		},
	},

	// edit
	edit: ( { attributes, setAttributes } ) => {
		// attributes
		const {
			title,
			titleColor,
			subtitle,
			subtitleColor,
			imageShadowColor,
		} = attributes;

		// functions
		function onChangeTitle( newItem ) {
			setAttributes( { title: newItem } );
		}
		function onChangeTitleColor( newItem ) {
			setAttributes( { titleColor: newItem } );
		}
		function onChangeSubtitle( newItem ) {
			setAttributes( { subtitle: newItem } );
		}
		function onChangeSubtitleColor( newItem ) {
			setAttributes( { subtitleColor: newItem } );
		}
		function onChangeImageShadowColor( newItem ) {
			setAttributes( { imageShadowColor: newItem } );
		}

		// render
		return ( [
			<InspectorControls>
				<PanelBody title={ 'Színek' } >
					<p><strong>Cím színe:</strong></p>
					<ColorPalette value={ titleColor } onChange={ onChangeTitleColor } />
					<p><strong>Alcím színe:</strong></p>
					<ColorPalette value={ titleColor } onChange={ onChangeSubtitleColor } />
					<ColorPalette value={ imageShadowColor } onChange={ onChangeImageShadowColor } />
				</PanelBody>
			</InspectorControls>,
			<div className="weart-rolunk">
				<div className="container">
					<div className="text">
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
						<InnerBlocks allowedBlocks={ 'core/paragraph' } />
					</div>
					<div className="image">
						<InnerBlocks allowedBlocks={ 'core/image' } />
						<div className="shadow" style={ { backgroundColor: imageShadowColor } }></div>
					</div>
				</div>
			</div>,
		] );
	},

	// save
	save: ( { attributes } ) => {
		// attributes
		const {
			title,
			titleColor,
			subtitle,
			subtitleColor,
			imageShadowColor,
		} = attributes;

		// render
		return (
			<div className="weart-rolunk">
				<div className="container">
					<div className="text">
						<h4 style={ { color: subtitleColor } }>
							{ subtitle }
						</h4>
						<h2 style={ { color: titleColor } }>
							{ title }
						</h2>
						<InnerBlocks.Content />
					</div>
					<div className="image">
						<InnerBlocks.Content />
						<div className="shadow" style={ { backgroundColor: imageShadowColor } }></div>
					</div>
				</div>
			</div>
		);
	},

} );
