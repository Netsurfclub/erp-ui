import React from "react";

const FileInput: React.FC<FileInputProps> = ({
  name,
  acceptedFileExtensions,
  disabled,
  onChange,
}) => {
  return (
    <input
      type="file"
      accept={acceptedFileExtensions}
      id={name}
      name={name}
      className="form-control-file"
      onChange={onChange}
      style={{
        position: "absolute",
        inset: "0",
        opacity: "0",
      }}
      disabled={disabled}
    />
  );
};

export default FileInput;
