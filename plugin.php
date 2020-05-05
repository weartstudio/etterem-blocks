<?php
/**
 * Plugin Name: Bistro Blookkok
 * Plugin URI: https://github.com/ahmadawais/create-guten-block/
 * Description: Az Bistro sablonhoz készült egyedi blokkok.
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
