export default function NameList({ names }) {
  return (
    <ul className="mt-4 space-y-1">
      {names.map((item, i) => (
        <li key={i} className="border-b py-1 text-sm">
          <div className="font-medium">{item.name}</div>
          <div className="text-gray-500 text-xs">
            Added at{" "}
            {new Date(item.createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </li>
      ))}
    </ul>
  );
}
