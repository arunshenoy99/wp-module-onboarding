import { Fragment } from '@wordpress/element';
import { Slot } from '@wordpress/components';
import { useSelect } from '@wordpress/data';

import StepNavigation from '../step-navigation';
import { store as nfdOnboardingStore } from '../../../store';
import { SIDEBAR_MENU_SLOTFILL_PREFIX } from '../../../../constants';

const HeaderEnd = () => {
	const { sidebars } = useSelect( ( select ) => {
		return {
			sidebars: select( nfdOnboardingStore ).getSidebars(),
		};
	} );

	return (
		<Fragment>
			<StepNavigation />
			{ sidebars.map( ( sidebar ) => {
				return (
					<Slot
						key={ sidebar.id }
						name={ `${ SIDEBAR_MENU_SLOTFILL_PREFIX }/${ sidebar.id }` }
					/>
				);
			} ) }
		</Fragment>
	);
};

export default HeaderEnd;
