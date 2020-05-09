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
} = wp.components;

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
		categories: {
			type: 'object',
		},
		selectedCategory: {
			type: 'string',
		},
		postsPerPage: {
			type: 'string',
		}
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

		// ellenőrzés
		console.log( attributes.categories );

		// return
		return (
			<div className="weart-blog" style={ { display: 'flex' } }>
				<div className="grid">
					<div>
						<SelectControl
							label="Válassz kategóriát"
							value={ attributes.selectedCategory }
							onChange={ ( e ) => { setAttributes( { selectedCategory: e } ); } }
							options={ categoriesList }
						/>
					</div>
					<div>
						<TextControl
							label="Mennyit jelenítsen meg?"
							onChange={ ( e ) => { setAttributes( { postsPerPage: e } ); } }
							value={ attributes.postsPerPage }
						/>
					</div>
				</div>
			</div>
		);
	},

	save: () => {
		// because it's a dynamic block
		return null;
	},

} );
