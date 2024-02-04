export default function CategoryItem({
  id: categoryId,
  categoryName,
  isFollow,
  onToggleFollow,
}) {
  const lowerCaseName = categoryName.toLowerCase();
  let followStateText = "팔로우";
  if (isFollow) followStateText = "팔로우 취소";
  return (
    <li className="py-2 px-3 flex justify-between items-center">
      <p tabIndex="0">{categoryName}</p>
      <input
        className="[&:checked+label]:bg-white [&:checked+label]:text-contents-content-primary [&:focus+label]:outline [&:focus+label]:outline-primary w-0 h-0"
        type="checkbox"
        id={lowerCaseName}
        name={lowerCaseName}
        autoComplete="off"
        checked={isFollow}
        onChange={(e) => onToggleFollow(e, categoryId)}
      />
      <label
        htmlFor={lowerCaseName}
        className="px-3 py-1.5 text-paragraph-sm text-white font-normal bg-secondary rounded-full border border-contents-content-tertiary hover:brightness-95 transition-colors duration-300 cursor-pointer"
      >
        {followStateText}
      </label>
    </li>
  );
}
