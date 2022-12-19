import { ToggleControl } from '@wordpress/components';
import { dispatch, select } from '@wordpress/data';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

export default class Sidebar extends Component { 
    render() {
        const meta = select( 'core/editor' ).getEditedPostAttribute( 'meta' );
        const lighthouseData = meta['_bel_plugin_data'];

        return (
          <PluginDocumentSettingPanel
            name="bel-plugin-sidebar"
            title={ __( 'Lighthouse Score', 'block-editor-lighthouse' ) }
            >
           {! lighthouseData && 
             <p>No Lighthouse data available yet. Check back soon!</p>
           }
          </PluginDocumentSettingPanel>
        );
    }
}