import { useState, useEffect } from "react";
import { toast } from "bulma-toast";
import "./index.css";

const Feedback = () => {
  const [disabled, setDisabled] = useState(true);
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (contact && description) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [contact, description]);

  const handleSubmitClick = () => {
    toast({
      message: "👏 感谢您的反馈和建议 !",
      type: "is-success",
      position: "top-center",
      single: true
    });
  };

  return (
    <div className="section is-body">
      <div className="container">
        <div className="feedback-content">
          <div className="field">
            <label className="label">如何联系你？</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={contact}
                onChange={(event) => setContact(event.target.value)}
                placeholder="请输入您的联系方式"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">问题描述</label>
            <div className="control">
              <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                className="textarea"
                placeholder="请输入问题或反馈描述"
              />
            </div>
          </div>

          <div className="control">
            <button
              onClick={handleSubmitClick}
              disabled={disabled}
              className="button is-primary"
            >
              提交
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
