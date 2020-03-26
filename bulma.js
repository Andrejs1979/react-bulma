import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';

export function Box({ children }) {
	return <div className="box">{children}</div>;
}

export function Button({
	type,
	action,
	children,
	icon,
	iconColor,
	color,
	size,
	vertical,
	block,
	rounded,
	loading,
	disabled
}) {
	// const onClick = link ? () => navigate(`/${link}/${itemID}`) : () => action(itemID);
	return (
		<div className="control">
			<button
				type={type}
				onClick={action}
				disabled={disabled}
				className={`button is-${color || 'primary'} is-${size || 'normal'} ${!block ||
					'is-fullwidth'} ${!rounded || 'is-rounded'} ${!loading || 'is-loading'}`}
			>
				{icon && (
					<span className="icon">
						<FontAwesomeIcon icon={icon} size={size} color={iconColor} />
					</span>
				)}
				<span>
					<strong>{children}</strong>
				</span>
			</button>
		</div>
	);
}

export function ButtonGroup({ children, attached, centered, right }) {
	return (
		<div className={`buttons ${!attached || 'has-addons'} ${!centered || 'is-centered'} ${!right || 'is-right'}`}>
			{children}
		</div>
	);
}

export function Card({ children }) {
  return <div>{children}</div>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
export function CardHeader({ children, onClose }) {
  return (
    <header className="card-header">
      <p className="card-header-title">{children}</p>
      {/* <a href="#" className="card-header-icon" aria-label="more options"> */}
      {/* <span className="icon">
          <i className="fas fa-angle-down" aria-hidden="true"></i>
        </span> */}
      {/* </a> */}
    </header>
  );
}
export function CardFooter({ children }) {
  return <footer className="card-footer">{children}</footer>;
}
export function CardFooterItem({ children }) {
  return (
    <a href="#" className="card-footer-item">
      {children}
    </a>
  );
}

export function CardImage({ children }) {
  return (
    <div className="card-image">
      <figure className="image is-4by3">{children}</figure>
    </div>
  );
}

export function Media({ image, children }) {
  return (
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">{image}</figure>
      </div>
      <div className="media-content">{children}</div>
    </div>
  );
}

export function Container({ children }) {
	return <div className="container">{children}</div>;
}
export function Columns({ children, centered, mobile, multiline, vertical }) {
	return (
		<div
			className={`columns ${!centered || 'is-centered'} ${!vertical || 'is-vcentered'} ${!mobile ||
				'is-mobile'} ${!multiline || 'is-multiline'}`}
		>
			{children}
		</div>
	);
}
export function Column({ children, size, narrow }) {
	return <div className={`column ${!narrow || 'is-narrow'} is-${size}`}>{children}</div>;
}

export function Content({ children }) {
	return <div className="content">{children}</div>;
}

export function Delete() {
	return <button className="delete" />;
}

export function Icon({ brand, name, size = '', color = 'grey', container }) {
	return (
		<span className={`icon is-${container}`}>
			<i className={`${!brand ? 'fas' : 'fab'} fa-${name} fa-${size} has-text-${color}`} />
		</span>
	);
}

export function Notification({ children, color }) {
	return <div className={`notification is-${color}`}>{children}</div>;
}

export function Progress({ value, color, size }) {
	return <progress value={value} max="100" className={`progress is-${color} is-${size}`} />;
}

export function Footer({ children }) {
	return (
		<footer className="footer">
			<div className="content has-text-centered">{children}</div>
		</footer>
	);
}
export function Hero({ children, color, size, bold, title, subtitle }) {
	return (
		<section className={`hero is-${color} is-${size} is-${bold}`}>
			<div className="hero-body">
				<div className="container">
					{title && <h1 className="title">{title}</h1>}
					{subtitle && <h2 className="subtitle">{subtitle}</h2>}
					{children}
				</div>
			</div>
		</section>
	);
}

export function Level({ children, mobile }) {
	return <nav className={`level ${!mobile || 'is-mobile'}`}>{children}</nav>;
}
export function Left({ children }) {
	return <div className="level-left">{children}</div>;
}
export function Right({ children }) {
	return <div className="level-right">{children}</div>;
}
export function Item({ children }) {
	return <div className="level-item">{children}</div>;
}

export function Section({ children }) {
	return (
		<section className="section">
			<div className="container">{children}</div>
		</section>
	);
}

export function Menu({ label, children }) {
	return (
		<section className="section">
			<div className="container">
				<p className="menu-label has-text-centered">
					<strong>{label}</strong>
				</p>
				<ul className="menu-list">{children}</ul>
			</div>
		</section>
	);
}

export function MenuItem({ children, to }) {
	return (
		<li>
			<Link className="navbar-item" to={to}>
				{children}
			</Link>
		</li>
	);
}

export function Input({ field, form: { touched, errors }, type, size, label, icon, placeholder, help, loading }) {
	return (
		<div className="field">
			<label className={`label is-hidden-mobile is-${size}`}>{label}</label>
			<label className={`label is-hidden-desktop`}>{label}</label>
			<div
				className={`control is-${size} ${icon && 'has-icons-left'} has-icons-right ${loading && 'is-loading'}`}
			>
				<input
					type={type}
					placeholder={placeholder}
					className={`input is-hidden-mobile is-${size} is-${touched[field.name] &&
						errors[field.name] &&
						'danger'}`}
					aria-haspopup="true"
					aria-controls="suggestions"
					{...field}
				/>
				<input
					type={type}
					placeholder={placeholder}
					className={`input is-hidden-desktop is-${touched[field.name] && errors[field.name] && 'danger'}`}
					aria-haspopup="true"
					aria-controls="suggestions"
					{...field}
				/>

				{icon && (
					<span className={`icon is-hidden-mobile is-${size} is-left`}>
						<i className={`fas fa-${icon}`} />
					</span>
				)}

				{touched[field.name] && (
					<span className={`icon is-hidden-mobile is-${size} is-right`}>
						{errors[field.name] ? <i className={`fas fa-times`} /> : <i className={`fas fa-check`} />}
					</span>
				)}
			</div>

			{touched[field.name] && errors[field.name] ? (
				<p className="help is-danger">{errors[field.name]}</p>
			) : (
				<p className="help">{help}</p>
			)}
		</div>
	);
}

export function Tiles({ children }) {
	return <div className="tile is-ancestor">{children}</div>;
}

export function Parent({ children, vertical }) {
	return <div className={`tile is-parent ${!vertical || 'is-vertical'}`}>{children}</div>;
}

export function Tile({ children, color, box }) {
	return (
		<article className={`tile is-child ${!color || 'notification'} is-${color} ${!box || 'box'}`}>
			{children}
		</article>
	);
}

export function Vertical({ children, size }) {
	return <div className={`tile is-vertical is-${size}`}>{children}</div>;
}
