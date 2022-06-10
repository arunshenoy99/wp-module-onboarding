import { Button, Tooltip } from '@wordpress/components';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import ExitToWordPress from '../../ExitToWordPress';
import { Fragment } from '@wordpress/element';
import { Icon } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { store as nfdOnboardingStore } from '../../../store';
import { useSelect } from '@wordpress/data';

const NavPrimary = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { topSteps } = useSelect((select) => {
		return {
			topSteps: select(nfdOnboardingStore).getTopSteps(),
		};
	}, []);
	const isFirstStep = topSteps[0].path === location.pathname;
	return (
		<div className="is-drawer-fade">
			{(isFirstStep && (
				<Button
					className="nfd-onboarding-drawer__panel-back"
					variant="tertiary"
					onClick={() => navigate('/page/what-to-expect')}
				>
					What to Expect
				</Button>
			)) || (
				<ExitToWordPress
					className="nfd-onboarding-drawer__panel-back"
					variant="tertiary"
					origin="drawer-panel"
				/>
			)}
			<div className="nfd-onboarding-drawer__panel-menu">
				<ul className="nfd-onboarding-drawer__panel-routes">
					{topSteps.map((step) => {
						return (
							<Tooltip key={step.path} text={step.heading}>
								<li className="nfd-onboarding-drawer__panel-menu-item">
									<NavLink
										to={step.path}
										className="nfd-onboarding-drawer__panel-menu-link"
										state={{ origin: 'drawer-nav' }}
									>
										<Icon icon={step.Icon} />
										<span>{step.title}</span>
									</NavLink>
								</li>
							</Tooltip>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default NavPrimary;