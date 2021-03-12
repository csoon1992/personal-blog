import React from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * Menu Component
 * --------------
 * If this.props.onlyIcons not exists, generate a menu using the properties link and label
 * If this.props.onlyIcons exists, generate a menu using the properties link, label and icon
 */
class Menu extends React.Component {
  render() {
    const classes = this.props.classes || "item";
    const menuClass = this.props.menuClass || "";

    const menu = (
      <ul className={`menu list-unstyled ${menuClass}`}>
        {this.props.items.map((item, i) => {
          const internal = /^\/(?!\/)/.test(item.link);

          let link = (
            <Link href={item.link} title={item.label} activeClassName="active">
              <a>
                <Image
                  className="object-cover rounded-t-xl"
                  layout="fill"
                  src={`/files/${item.icon}`}
                  alt={post.item.label}
                />
              </a>
            </Link>
          );

          if (!internal) {
            link = (
              <a
                href={item.link}
                title={item.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="object-cover rounded-t-xl"
                  layout="fill"
                  src={`/files/${item.icon}`}
                  alt={post.item.label}
                />
              </a>
            );
          }

          if (!this.props.onlyIcons) {
            link = (
              <Link href={item.link}>
                <a>{item.label}</a>
              </Link>
            );
          }

          return (
            <li className={classes} key={i}>
              {link}
            </li>
          );
        })}
      </ul>
    );

    return menu;
  }
}

export default Menu;
