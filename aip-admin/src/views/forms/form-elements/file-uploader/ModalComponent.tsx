import React, { useRef, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import ReactCrop, { type Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

type UploadModalProps = {
  isOpen: boolean;
  image: string | null;
  onClose: () => void;
  onSubmit: (croppedImage: File | null) => void;
  aspectRatio?: number; // Add aspectRatio as an optional prop
};

const CropperModal: React.FC<UploadModalProps> = ({
  image,
  isOpen,
  onClose,
  onSubmit,
  aspectRatio, // Destructure aspectRatio
}) => {
  const [crop, setCrop] = useState<Crop | undefined>();
  const [completedCrop, setCompletedCrop] = useState<Crop | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const cropImage = async (): Promise<File | null> => {
    if (!completedCrop || !imageRef.current) return null;

    const canvas = document.createElement("canvas");
    const scaleX = imageRef.current.naturalWidth / imageRef.current.width;
    const scaleY = imageRef.current.naturalHeight / imageRef.current.height;

    canvas.width = completedCrop.width!;
    canvas.height = completedCrop.height!;
    const ctx = canvas.getContext("2d");

    ctx?.drawImage(
      imageRef.current,
      completedCrop.x! * scaleX,
      completedCrop.y! * scaleY,
      completedCrop.width! * scaleX,
      completedCrop.height! * scaleY,
      0,
      0,
      completedCrop.width!,
      completedCrop.height!
    );

    return new Promise<File | null>((resolve) => {
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(new File([blob], "cropped-image.png", { type: "image/png" }));
        } else {
          resolve(null);
        }
      });
    });
  };

  const handleSubmit = async () => {
    const croppedImage = await cropImage();
    onSubmit(croppedImage);
    onClose();
  };

  if (!image) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm">
      <DialogContent>
        <ReactCrop
          crop={crop}
          onChange={(newCrop) => setCrop(newCrop)}
          onComplete={(c) => setCompletedCrop(c)}
          aspect={aspectRatio}
        >
          <img
            ref={imageRef}
            src={image}
            alt="To be cropped"
            style={{ maxWidth: "100%" }}
          />
        </ReactCrop>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default CropperModal;
