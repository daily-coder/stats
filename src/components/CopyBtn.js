import { useEffect } from "react";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import propTypes from "prop-types";

function CopyBtn({ text }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      // check-icon disappears after 1 second
      setTimeout(() => setCopied(false), 1000);
    }
  }, [copied]);

  function copyToClipboard() {
    // user cannot copy if check-icon is visible
    if (!copied) {
      setCopied(true);
    }
  }

  return (
    <CopyToClipboard text={text} onCopy={copyToClipboard}>
      <button className="p-2" type="button" aria-label="copy button">
        <i className={`bi ${copied ? "bi-check-lg" : "bi-clipboard"}`}></i>
      </button>
    </CopyToClipboard>
  );
}

CopyBtn.propTypes = {
  text: propTypes.string.isRequired,
};

export default CopyBtn;
