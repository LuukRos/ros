import { Link } from './link';

type Item = {
  label: string;
  href?: string;
  icon?: React.ReactNode | string;
};

interface ListProps {
  items: Item[];
  type: 'ol' | 'ul';
  resetStyles?: boolean;
  title?: string;
}

export const List = ({ items, type = 'ul', resetStyles, title }: ListProps) => {
  const ListTemplate = type;
  const itemTemplate = (item: Item) =>
    item.href ? (
      <Link href={item.href} label={item.label} />
    ) : (
      <>{item.label}</>
    );

  return (
    <>
      {title && <p className="mb-2">{title}</p>}

      <ListTemplate
        className={`${
          !resetStyles
            ? type === 'ol'
              ? 'ml-8 list-decimal'
              : 'ml-4 list-disc'
            : 'm-0 flex list-none gap-2 p-0'
        }`}
      >
        {items.map((item, index) => (
          <li key={index} className="list-item w-fit marker:text-green">
            {item.icon}
            {itemTemplate(item)}
          </li>
        ))}
      </ListTemplate>
    </>
  );
};
