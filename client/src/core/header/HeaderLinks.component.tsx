import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import LogoutIcon from '@material-ui/icons/PowerSettingsNew';
import { GDHeaderLink } from '~types/general';
import { Tooltip } from '~components/tooltips';
import * as styles from './Header.scss';

export type HeaderLinksProps = {
	headerLinks: GDHeaderLink[];
	firstName: string | null;
	showLoginDialog: () => void;
	onLogout: () => void;
	i18n: any;
};

const HeaderLinks = ({ headerLinks, firstName, showLoginDialog, onLogout, i18n }: HeaderLinksProps): JSX.Element => {
	const links: any = [];
	const generatorPath = process.env.GD_GENERATOR_PATH || ''; // just to placate TS

	headerLinks.forEach((headerLink) => {
		if (headerLink === 'generator') {
			links.push(<li><Link to={generatorPath}>{i18n.generator}</Link></li>);
		} else if (headerLink === 'separator') {
			links.push(<li style={{ color: '#c0c0c3' }}>|</li>);
		} else if (headerLink === 'dataSets') {
			links.push(<li><Link to="/datasets">{i18n.dataSets}</Link></li>);
		} else if (headerLink === 'userAccount') {
			links.push(<li><Link to="/account">{firstName}</Link></li>);
		} else if (headerLink === 'logout') {
			links.push(
				<li className={styles.logoutLink}>
					<Tooltip title={i18n.logout} placement="bottom" arrow>
						<span>
							<IconButton size="small" aria-label={i18n.closePanel} onClick={onLogout}>
								<LogoutIcon fontSize="inherit" />
							</IconButton>
						</span>
					</Tooltip>
				</li>
			);
		} else if (headerLink === 'signup') {
			links.push(<li><Link to="/signup">{i18n.signup}</Link></li>);
		} else if (headerLink === 'loginDialog') {
			links.push(<li onClick={showLoginDialog}>{i18n.login}</li>);
		} else if (headerLink === 'loginPage') {
			links.push(<li><Link to='/login'>{i18n.login}</Link></li>);
		}
	});

	return (
		<>{links}</>
	);
};

export default HeaderLinks;