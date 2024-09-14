const Link = ({ type = "secondary", href = "#", children }) => {
  let styles = " px-2 py-2 ";
  if (type === "primary") {
    styles = styles + "bg-black text-white dark:bg-white dark:text-black";
  }
  if (type === "primary++") {
    styles = styles + "bg-white text-black dark:bg-black dark:text-white";
  }
  if (type === "secondary") {
    styles = styles + "border border-black dark:border-white";
  }
  return (
    <a className={styles} href={href} target="_blank">
      {children}
    </a>
  );
};

export default Link;
