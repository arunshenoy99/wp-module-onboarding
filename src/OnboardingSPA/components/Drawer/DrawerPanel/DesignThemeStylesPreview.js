import { VIEW_DESIGN_THEME_STYLES_MENU } from '../../../../constants';
import { store as nfdOnboardingStore } from '../../../store';
import { useSelect, useDispatch } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';
import LivePreview from '../../../components/LivePreview';

import { check, search, Icon } from '@wordpress/icons';
import { useNavigate } from 'react-router-dom';
import { useViewportMatch } from '@wordpress/compose';
import { getPatterns } from '../../../utils/api/patterns';
import { getGlobalStyles } from '../../../utils/api/themes';

import { useGlobalStylesOutput } from '../../../utils/global-styles/use-global-styles-output';

const DesignThemeStylesPreview = () => {
    const MAX_PREVIEWS_PER_ROW = 3;

	const navigate = useNavigate();
	const [ isLoaded, setIsLoaded ] = useState( false );
	const [ pattern, setPattern ] = useState();
	const [ globalStyles, setGlobalStyles ] = useState();
	const [ selectedStyle, setSelectedStyle ] = useState( 0 );

	const { currentStep, nextStep } = useSelect( ( select ) => {
		return {
			currentStep: select( nfdOnboardingStore ).getCurrentStep(),
			nextStep: select( nfdOnboardingStore ).getNextStep(),
		};
	}, [] );

    const {
		setDrawerActiveView,
		setIsDrawerOpened,
		setIsSidebarOpened,
		setIsDrawerSuppressed,
        updatePreviewSettings
	} = useDispatch( nfdOnboardingStore );

	const getStylesAndPatterns = async () => {
		const pattern = await getPatterns( currentStep.patternId, true );
		const globalStyles = await getGlobalStyles();
		setPattern( pattern?.body );
		setGlobalStyles( globalStyles?.body );
		setIsLoaded( true );
	};

	useEffect( () => {
		if ( ! isLoaded ) getStylesAndPatterns();
	}, [ isLoaded ] );
    

	const handleClick = ( idx ) => {
        const previewSettings = globalStyles[idx];
        const updatedPreviewSettings = useGlobalStylesOutput( previewSettings );
        updatePreviewSettings(updatedPreviewSettings);
		setSelectedStyle( idx );
	};
    const buildPreviews = ( start ) => {
		const previews = [];
		globalStyles?.forEach( ( globalStyle, idx ) => {
			previews.push(
				<div
					className="theme-styles-preview__list__item"
					onClick={ () => handleClick( idx ) }
				>
					<div className="theme-styles-preview__list__item__title-bar">
						<div className="theme-styles-preview__list__title-bar__browser">
							<span
								className="theme-styles-preview__list__item__title-bar__browser__dot"
								style={ { background: '#989EA7' } }
							></span>
							<span
								className="theme-styles-preview__list__item__title-bar__browser__dot"
								style={ { background: '#989EA7' } }
							></span>
							<span
								className="theme-styles-preview__list__item__title-bar__browser__dot"
								style={ { background: '#989EA7' } }
							></span>
						</div>
						<div
							className={ `${
								idx == selectedStyle
									? 'theme-styles-preview__list__item__title-bar--selected'
									: 'theme-styles-preview__list__item__title-bar--unselected'
							}` }
						>
							<Icon
								className="theme-styles-preview__list__item__title-bar--selected__path"
								icon={ check }
								size={ 64 }
							/>
						</div>
					</div>
					<div className="theme-styles-preview__list__item__live-preview-container">
						<LivePreview
							blockGrammer={ pattern }
							viewportWidth={ 900 }
							styling={ 'custom' }
							previewSettings={ globalStyle }
						/>
						<div className="theme-styles-preview__list__item__live-preview-container__overlay">
							<Icon
								className="theme-styles-preview__list__item__live-preview-container__overlay__icon"
								size={ 64 }
								icon={ search }
							/>
						</div>
					</div>
				</div>
			);
		} );

		return previews;
	};
    

    return (
			<div className="theme-styles-preview">
				<div className="theme-styles-preview__list--drawer">
					{ globalStyles ? buildPreviews().slice( 0, MAX_PREVIEWS_PER_ROW ) : '' }
				</div>
				<div className="theme-styles-preview__list--drawer">
					{ globalStyles
						? buildPreviews().slice( MAX_PREVIEWS_PER_ROW, globalStyles.length )
						: '' }
				</div>
			</div>
	);
}

export default DesignThemeStylesPreview;