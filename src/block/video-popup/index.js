//  Import CSS.
import './style/style.scss';
import './style/editor.scss';

//  Import JS.
import { Edit } from './edit'
import { VideoPlayIcon, VideoPopupIcon } from '../../icons';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'video-popup-block/video-popup', {
    
    title: __( 'Video Popup' ),
    
    description: __('Video popup block. use youtube or vimeo videos'),
    
    keywords: [ __('video'), __('popup'), 'youtube' ],
    
    icon: 'admin-site',
    
    category: 'common',
    
    attributes: {

        url:{
            type: 'url',
            default: 'https://vimeo.com/50522981',
        },
        videoSite:{
            type: 'string',
            default: 'vimeo',
        },
        videoId:{
            type: 'string',
            default: '50522981',
        },
        color: {
            type: 'string',
            default: 'white',
        },
        backgroundColor: {
            type: 'string',
            default: '#1d1d1d',
        },
        imageUrl: {
            type: 'string',
        },
        imageID: {
            type: 'number',
        },
    
    },
    
    edit: Edit,
    
    save: ( props ) => {

        const { 
            url,
            color,
            backgroundColor,
            imageUrl,
            videoId,
            videoSite,
        } = props.attributes
    
        const style = {    
            'background-image' : ( ! imageUrl ? '' : 'url(' + imageUrl + ')' ),
            'background-color' : backgroundColor,
        };
    
        return (
            <div key = { 'video-popup' } className = { 'bokez-video-popup' } data-videosite = { videoSite } data-videoid = { videoId } >
                <div className = { 'bokez-video-wrapper' } style = { style } > 
    
                    <a onClick = { (event) => { event.preventDefault(); event.stopPropagation(); } } 
                        href = { '#' } 
                        className = { 'bokez-video-popup-play' }                                 
                    >
                        <VideoPlayIcon fill = { color } />
                    </a>
    
                </div>
            </div>
        );
        
    },
});
