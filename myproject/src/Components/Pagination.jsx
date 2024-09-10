function Pagination() {
  return (
    <>
      <div className="text-center mx-auto">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="https://www.google.com">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="./FirstPage.html">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>

        <button type="button" className="btn btn-primary" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </>
  );
}

export default Pagination;
