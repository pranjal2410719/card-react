import React from "react";
import "./card.css";

export default function ProfileCard({
  name = "Unknown User",
  bio = "No bio available",
  avatar,
  tags = [],
  onFollow = () => {},
  onMessage = () => {},
  onNotify = () => {},
  followText = "Follow",
}) {
  const handleImageError = (e) => {
    e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face";
  };

  return (
    <div className="profile-card">
      <div className="card-content">
        <div className="avatar-wrapper">
          <img
            src={avatar || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"}
            alt={name}
            className="avatar"
            onError={handleImageError}
          />
        </div>

        <div className="info">
          <h2 className="name">{name}</h2>

          {tags.length > 0 && (
            <div className="tags">
              {tags.map((tag, index) => (
                <span
                  className={`tag ${tag?.className || "tag-writer"}`}
                  key={index}
                >
                  {tag?.label || "Tag"}
                </span>
              ))}
            </div>
          )}

          <p className="bio">{bio}</p>
        </div>

        <div className="actions">
          <button className="btn-follow" onClick={onFollow}>
            <span className="plus">+</span> {followText}
          </button>

          <div className="icon-btn" onClick={onMessage}>
            <i className="icon-message"></i>
          </div>

          <div className="icon-btn" onClick={onNotify}>
            <i className="icon-bell"></i>
          </div>
        </div>
      </div>
    </div>
  );
}