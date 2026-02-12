import multer from 'multer';
import { getUploadDir } from '././../../fileUtils.js';
import slugify from 'slugify';

export const uploadFile = (path) => {
	const whitelist = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];

	//Using multer
	const storage = multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, getUploadDir(path));
		},
		filename: function (req, file, cb) {
			const name = slugify(file.originalname, { lower: true });
			cb(null, Date.now() + '-' + name);
		},
	});
	const fileFilter = (req, file, cb) => {
		if (!whitelist.includes(file.mimetype)) {
			return cb(new Error('file type is not allowed'));
		}
		cb(null, true);
	};

	return multer({ storage: storage, fileFilter: fileFilter, limits: { fieldSize: 25 * 1024 * 1024 } });
	//End of using multer
};

export const uploadVideo = (path) => {
	const whitelist = [
		'image/png',
		'image/jpeg',
		'image/jpg',
		'image/webp',
		'video/mp4',
		'video/webm',
		'video/ogg',
		'video/MOV',
		'application/pdf', // Added PDF
		'application/vnd.ms-powerpoint', // Added PowerPoint
		'application/vnd.openxmlformats-officedocument.presentationml.presentation', // Added PowerPoint presentation (OpenXML format)
	];

	// Using multer
	const storage = multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, getUploadDir(path)); // Specify the upload directory
		},
		filename: function (req, file, cb) {
			const name = slugify(file.originalname, { lower: true });
			cb(null, Date.now() + '-' + name); // Use a timestamp and slugified name for the file
		},
	});

	const fileFilter = (req, file, cb) => {
		if (!whitelist.includes(file.mimetype)) {
			return cb(new Error('File type is not allowed'));
		}
		cb(null, true);
	};

	return multer({
		storage: storage,
		fileFilter: fileFilter,
		limits: { fileSize: 25 * 1024 * 1024 },
	});
};

export const uploadPdfFile = (path) => {
	const whitelist = [
		'application/pdf',
		'application/vnd.ms-powerpoint',
		'application/vnd.openxmlformats-officedocument.presentationml.presentation',
		'image/png',
		'image/jpeg',
		'image/jpg',
		'image/webp',
	];

	return multerFileUploader(whitelist, path);
};

function multerFileUploader(whitelist, path) {
	const storage = multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, getUploadDir(path));
		},
		filename: function (req, file, cb) {
			const name = slugify(file.originalname, { lower: true });
			cb(null, Date.now() + '-' + name);
		},
	});
	const fileFilter = (req, file, cb) => {
		if (!whitelist.includes(file.mimetype)) {
			return cb(new Error('file type is not allowed'));
		}
		cb(null, true);
	};

	return multer({ storage: storage, fileFilter: fileFilter });
}

// return multer({ storage: storage, fileFilter: fileFilter , limits: { fieldSize: 25 * 1024 * 1024 }});
