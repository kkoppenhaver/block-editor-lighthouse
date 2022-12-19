<?php
/**
 * Plugin Name:       Block Editor Lighthouse
 * Description:       A settings panel that shows Lighthouse results in the Block Editor sidebar
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1
 * Author:            Keanan Koppenhaver
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       block-editor-lighthouse
 *
 * @package           bel
 */

function bel_plugin_register_post_meta() {
    register_meta(
        'post',
        '_bel_plugin_data',
        [
            'auth_callback' => '__return_true',
            'default'       => '',
            'show_in_rest'  => true,
            'single'        => true,
            'type'          => 'string',
        ]
    );
}
add_action( 'init', 'bel_plugin_register_post_meta' );

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function bel_block_editor_init() {
    register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'bel_block_editor_init' );
