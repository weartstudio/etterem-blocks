/* eslint-disable react/jsx-key */
/*eslint linebreak-style: ["error", "windows"]*/
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
	BlockControls,
	AlignmentToolbar
} = wp.blockEditor;
const { 
	PanelBody, 
	IconButton, 
	RangeControl 
} = wp.components;
const ALLOWED_BLOCKS = [ 'core/button' ];

// register block
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
			default: 'secondary'
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

	edit: ( { attributes, setAttributes } ) => {
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
		const onChangeAlign = ( newItem ) => { 
			setAttributes( { alignment: newItem } ); 
		};
		const onChangeTitle = ( newItem ) => { 
			setAttributes( { title: newItem } ); 
		};
		const onChangeTitleColor = ( newItem ) => { 
			setAttributes( { titleColor: newItem } ); 
		};
		const onChangeSubtitle = ( newItem ) => { 
			setAttributes( { subtitle: newItem } ); 
		};
		const onChangeSubtitleColor = ( newItem ) => { 
			setAttributes( { subtitleColor: newItem } ); 
		};
		const onSelectImage = ( newItem ) => {
			setAttributes( { backgroundImage: newItem.sizes.full.url } ); 
		};
		const onOverlayColorChange = ( newItem ) => {
			setAttributes( { overlayColor: newItem } ); 
		};
		const onOverlayOpacityChange = ( newItem ) => {
			setAttributes( { overlayOpacity: newItem } ); 
		};

		// return
		return ( [
			<InspectorControls style={ { marginBottom: '40px' } }>
				<PanelBody title={ 'Betuszinek' }>
					<p><strong>Válasssz színt a Címnek</strong></p>
					<ColorPalette value={ titleColor }
								  onChange={ onChangeTitleColor } />
					<p><strong>Válasssz színt az Alcímnek</strong></p>
					<ColorPalette value={ subtitleColor }
								  onChange={ onChangeSubtitleColor } />
				</PanelBody>
				<PanelBody title={ 'Háttérkép beállítások' }>
                    <p><strong>Válassz háttérképet:</strong></p>
                    <MediaUpload
                        onSelect={ onSelectImage }
                        type="image"
                        value={ backgroundImage }
                        render={ ( { open } ) => (
							<IconButton
								className="editor-media-placeholder__button is-button is-default is-large"
								icon="upload"
								onClick={ open }>
								 Hatterkep
							</IconButton>
                        ) } />
                    <div style={ { marginTop: '20px', marginBottom: '40px' } }>
                        <p><strong>Atfedo szin:</strong></p>
                        <ColorPalette value={ overlayColor }
                                      onChange={ onOverlayColorChange } />
                    </div>
                    <RangeControl
                        label={ 'Atfedes Atlatszosag' }
                        value={ overlayOpacity }
                        onChange={ onOverlayOpacityChange }
                        min={ 0 }
                        max={ 1 }
                        step={ 0.01 } />
                </PanelBody>
			</InspectorControls>,
			<div className="weart-intro" style={ { 
				backgroundImage: `url( ${ backgroundImage } )`,
				textAlign: alignment,
			} }>
				{
					<BlockControls>
						<AlignmentToolbar value={ alignment } 
							onChange={ onChangeAlign }
						/>
					</BlockControls>
				}
				<div className="weart-intro-overlay" style={ { background: overlayColor, opacity: overlayOpacity } }></div>
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
					<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
				</div>
			</div>,
		] );
	},

	save: ( { attributes } ) => {
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
			<div className="weart-intro" style={ { 
				backgroundImage: `url( ${ backgroundImage } )`,
				textAlign: alignment,
			} }>
				<div className="weart-intro-overlay" style={ { background: overlayColor, opacity: overlayOpacity } }></div>
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