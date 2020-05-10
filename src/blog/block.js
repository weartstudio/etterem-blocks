/* eslint-disable brace-style */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-key */
//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks;
const {
	Spinner,
	SelectControl,
	TextControl,
	PanelBody,
} = wp.components;
const {
	RichText,
	InspectorControls,
} = wp.blockEditor;

registerBlockType( 'etterem-blocks/blog', {
	title: __( 'Blog' ),
	icon: 'admin-page',
	category: 'weart',
	keywords: [
		__( 'etterem' ),
		__( 'blog' ),
		__( 'weart' ),
	],
	attributes: {
		title: {
			type: 'string',
		},
		subtitle: {
			type: 'string',
		},
		categories: {
			type: 'object',
		},
		selectedCategory: {
			type: 'string',
		},
	},

	edit: ( { attributes, setAttributes } ) => {

		// hívjuk be a kategóriákat
		if ( ! attributes.categories ) {
			wp.apiFetch( {
				url: '/wp-json/wp/v2/categories',
			} ).then( categories => {
				setAttributes( {
					categories: categories,
				} );
			} );
		}

		// amíg tölt
		if ( ! attributes.categories ) {
			return <Spinner />;
		}

		// ha nincsenek kategóriák
		if ( attributes.categories && attributes.categories.length === 0 ) {
			return 'No categories found. Please add some...';
		}

		// select kategória
		let categoriesList = [];
		if ( attributes.categories ) {
			categoriesList.push( { value: 0, label: 'Not selected' } );
			attributes.categories.forEach( ( c ) => { // simple foreach loop
				categoriesList.push( { value: c.id, label: c.name } );
			} );
		}

		// return
		return ( [
			<InspectorControls>
				<PanelBody title="Beállítások">
					<TextControl
						value={ attributes.subtitle }
						onChange={ ( e ) => { setAttributes( { subtitle: e } ); } }
					/>
					<TextControl
						value={ attributes.title }
						onChange={ ( e ) => { setAttributes( { title: e } ); } }
					/>
					<SelectControl
						label="Válassz kategóriát"
						value={ attributes.selectedCategory }
						onChange={ ( e ) => { setAttributes( { selectedCategory: e } ); } }
						options={ categoriesList }
					/>
				</PanelBody>
			</InspectorControls>,
			<div className="weart-blog">
				<h4>{ attributes.subtitle }</h4>
				<h2>{ attributes.title }</h2>
				<div className="grid">
					<div className="item">
						<h2>Cikkcím</h2>
						<p>Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. </p>
					</div>
					<div className="item">
						<h2>Cikkcím</h2>
						<p>Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. </p>
					</div>
					<div className="item">
						<h2>Cikkcím</h2>
						<p>Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. </p>
					</div>
				</div>
			</div>,
		] );
	},

	save: () => {
		// because it's a dynamic block
		return null;
	},

} );
