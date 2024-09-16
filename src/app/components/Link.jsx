const Link = ({ type = "secondary", href = "#", children }) => {
  let styles = " px-4 py-2 font-semibold rounded-md ";
  if (type === "primary") {
    styles = styles + " special-bg text-black font-bold";
  }
  if (type === "secondary") {
    styles =
      styles +
      "border-2 border-slate-300 text-slate-300 hover:border-slate-100 hover:text-slate-100 transition-colors";
  }
  return (
    <div>
      <a className={styles} href={href} target="_blank">
        {children}
      </a>
    </div>
  );
};

export default Link;
