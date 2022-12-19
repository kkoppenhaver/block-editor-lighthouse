import { ToggleControl } from '@wordpress/components';
import { dispatch, select } from '@wordpress/data';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

export default class Sidebar extends Component { 
    render() {
        console.log('sidebar being registered');
        const meta = select( 'core/editor' ).getEditedPostAttribute( 'meta' );
        const exampleToggle = meta['_bel_plugin_data'];

        return (
          <PluginDocumentSettingPanel
            name="bel-plugin-sidebar"
            title={ __( 'Lighthouse Score', 'block-editor-lighthouse' ) }
            >
           <h1>Lighthouse Data</h1> 
          </PluginDocumentSettingPanel>
        );
    }
}