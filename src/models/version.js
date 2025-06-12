class Version {
	constructor (major = 0, minor = 0, patch = 0, revision = 0) {
		this .major = major;
		this .minor = minor;
		this .patch = patch;
		this .revision = revision;
	}
}

function create_new_version (major = 0, minor = 0, patch = 0, revision = 0) {
	return new Version (major, minor, patch, revision);
}

module. exports = { create_new_version }