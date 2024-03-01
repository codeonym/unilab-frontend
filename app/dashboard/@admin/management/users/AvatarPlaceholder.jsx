function AvatarPlaceholder({placeholder}) {
  return (
    <div className="avatar placeholder">
      <div className="bg-neutral text-neutral-content rounded-full w-8">
        <span className="text-xs">{placeholder}</span>
      </div>
    </div>
  )
}

export default AvatarPlaceholder