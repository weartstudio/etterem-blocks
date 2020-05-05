<?php
/**
 * Plugin Name: Etterem Blocks
 * Plugin URI: https://github.com/ahmadawais/create-guten-block/
 * Description: Az Etterem sablonhoz készült egyedi, előregyártott blokkok.
 * Author: weart
 * Author URI: https://weart.hu
 * Version: 1.0.0
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
