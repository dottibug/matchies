import styles from './userIconOptions.module.css';
import { icons } from '../../icons/userIcons';

export default function UserIconOptions({ userIcon, setUserIcon }) {
  // HANDLERS
  const handleClickIcon = (e) => setUserIcon(e.currentTarget.dataset.iconName);

  // STYLE
  const iconStyle = (iconName) => {
    return { backgroundColor: iconName === userIcon && 'cadetblue' };
  };

  return (
    <div className={styles['select-user-icon']}>
      <label htmlFor="user-icon">User Icon</label>
      <div className={styles['user-icon-options']}>
        {icons.map((icon) => {
          return (
            <div
              key={icon.name}
              onClick={handleClickIcon}
              data-icon-name={icon.name}
              className={styles['icon-image-wrapper']}
              style={iconStyle(icon.name)}>
              <img className={styles['icon-image']} src={icon.image} alt={icon.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
