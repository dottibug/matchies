'use client';
import styles from './userIconOptions.module.css';
import { icons } from '../icons/userIcons';
import Image from 'next/image';

export default function UserIconOptions({ selectedIcon, setSelectedIcon }) {
  // HANDLERS
  const handleClickIcon = (e) => setSelectedIcon(e.currentTarget.dataset.iconName);

  // STYLE
  const iconStyle = (iconName) => {
    return { backgroundColor: iconName === selectedIcon && 'cadetblue' };
  };

  return (
    <div className={styles['select-user-icon']}>
      <label htmlFor="user-icon">User Icon</label>
      <div className={styles['user-icon-options']}>
        {icons.map((icon) => (
          <div
            onClick={handleClickIcon}
            data-icon-name={icon.name}
            className={styles['icon-image-wrapper']}
            style={iconStyle(icon.name)}
            key={icon.name}>
            <Image src={icon.imagePath} alt={icon.name} fill={true} sizes="auto" />
          </div>
        ))}
      </div>
    </div>
  );
}
