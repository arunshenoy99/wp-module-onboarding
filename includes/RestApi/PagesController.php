<?php

namespace NewfoldLabs\WP\Module\Onboarding\RestApi;

use NewfoldLabs\WP\Module\Onboarding\Permissions;
use NewfoldLabs\WP\Module\Onboarding\Mustache\Mustache;

/**
 * class PagesController
 */
class PagesController
{

    /**
     * @var string
     */
    protected $namespace = 'newfold-onboarding/v1';

    /**
     * @var string
     */
    protected $rest_base = '/pages';

    /**
     * Registers rest routes for PagesController class.
     *
     * @return void
     */
    public function register_routes()
    {
        \register_rest_route(
            $this->namespace,
            $this->rest_base,
            array(
                'methods' => \WP_REST_Server::EDITABLE,
                'callback' => array($this, 'create_page'),
                'permission_callback' => array( Permissions::class, 'custom_post_authorized_admin' )
            )
        );
    }

    /**
     * Endpoint create_page
     * 
     * @param $request WP_REST_Request
     */
    public function create_page( \WP_REST_Request $request )
    {
        $title = \sanitize_text_field($request->get_param('page'));
        // check for param 
        if (is_null($title)) {
            return new \WP_Error('no_page_data', 'No Page Data Provided', array('status' => 400));
        }

        // check if page already exists using title
        // $page = get_page_by_title($title);
        // if (!empty($page)) {
        //     return new \WP_Error('page_already_exists', 'Provided page data already exists', array('status' => 400));
        // }

        $mustache   = new Mustache();
        switch ($title) {
            case 'home':
                $title      = 'Home';
                $content    = $mustache->render_template( 'homePage', array() );
                break;

            case 'about':
                $title      = 'About';
                $content    = $mustache->render_template( 'aboutPage', array() );
                break;

            case 'contact':
                $title      = 'Contact';
		        $content    = $mustache->render_template( 'contactPage', array() );
                break;

            default:
                return new \WP_Error('no_page_data', 'No Page Data Provided', array('status' => 400));
                break;
        }

        // Create page object
        $page_data = array(
            'post_title'    => $title,
            'post_content'  => $content,
            'post_status'   => 'publish',
            'post_author'   => \wp_get_current_user()->ID,
            'post_type'     => 'page'
        );

        print_r($page_data);exit;
        // Insert the page into the database
        if(wp_insert_post($page_data) > 0) {
            return new \WP_REST_Response( "Page ".$page_data['post_title']. " saved successfully", 200);
        } else {
            return new \WP_Error('error_saving_page', 'Error Saving Data Provided to Database', array('status' => 400));
        }
    }
}
