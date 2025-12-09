const CategoryButton = ({ label, active, onClick }) => {
  const classes = `px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors ${
    active
      ? 'bg-black text-white border-black'
      : 'bg-white text-black border-black hover:bg-black hover:text-white'
  }`;

  return (
    <button onClick={onClick} className={classes}>
      {label}
    </button>
  );
};

export default CategoryButton;