function Pagination({
  length,
  productsPerPage,
  handlePagination,
  currentPage,
}) {
  const pages = [];

  for (let i = 1; i <= Math.ceil(length / productsPerPage); i++) {
    pages.push(i);
  }

  return (
    <>
      <div className="pagination">
        {pages.map((page, index) => (
          <button
            key={index}
            className={currentPage === page ? "active" : ""}
            onClick={() => handlePagination(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </>
  );
}

export default Pagination;
