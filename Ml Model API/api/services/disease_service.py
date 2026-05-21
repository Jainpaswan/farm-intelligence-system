import torch
import torch.nn as nn
import torch.nn.functional as F
from torchvision import transforms
from PIL import Image

MODEL_PATH = "api/models/disease/plant_disease_model.pth"


# -----------------------------
# MODEL ARCHITECTURE
# -----------------------------

class ImageClassificationBase(nn.Module):

    def training_step(self, batch):
        images, labels = batch
        out = self(images)
        loss = F.cross_entropy(out, labels)
        return loss

    def validation_step(self, batch):
        images, labels = batch
        out = self(images)
        loss = F.cross_entropy(out, labels)
        return {'val_loss': loss.detach()}


def ConvBlock(in_channels, out_channels, pool=False):

    layers = [
        nn.Conv2d(in_channels, out_channels, kernel_size=3, padding=1),
        nn.BatchNorm2d(out_channels),
        nn.ReLU(inplace=True)
    ]

    if pool:
        layers.append(nn.MaxPool2d(4))

    return nn.Sequential(*layers)


class CNN_NeuralNet(ImageClassificationBase):

    def __init__(self, in_channels, num_diseases):
        super().__init__()

        self.conv1 = ConvBlock(in_channels, 64)
        self.conv2 = ConvBlock(64, 128, pool=True)

        self.res1 = nn.Sequential(
            ConvBlock(128, 128),
            ConvBlock(128, 128)
        )

        self.conv3 = ConvBlock(128, 256, pool=True)
        self.conv4 = ConvBlock(256, 512, pool=True)

        self.res2 = nn.Sequential(
            ConvBlock(512, 512),
            ConvBlock(512, 512)
        )

        self.classifier = nn.Sequential(
            nn.MaxPool2d(4),
            nn.Flatten(),
            nn.Linear(512, num_diseases)
        )

    def forward(self, x):

        out = self.conv1(x)
        out = self.conv2(out)

        out = self.res1(out) + out

        out = self.conv3(out)
        out = self.conv4(out)

        out = self.res2(out) + out

        out = self.classifier(out)

        return out


# -----------------------------
# CLASS LABELS
# -----------------------------

classes = [
    'Tomato___Late_blight',
    'Tomato___healthy',
    'Grape___healthy',
    'Orange___Haunglongbing_(Citrus_greening)',
    'Soybean___healthy',
    'Squash___Powdery_mildew',
    'Potato___healthy',
    'Corn_(maize)___Northern_Leaf_Blight',
    'Tomato___Early_blight',
    'Tomato___Septoria_leaf_spot',
    'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot',
    'Strawberry___Leaf_scorch',
    'Peach___healthy',
    'Apple___Apple_scab',
    'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
    'Tomato___Bacterial_spot',
    'Apple___Black_rot',
    'Blueberry___healthy',
    'Cherry_(including_sour)___Powdery_mildew',
    'Peach___Bacterial_spot',
    'Apple___Cedar_apple_rust',
    'Tomato___Target_Spot',
    'Pepper,_bell___healthy',
    'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)',
    'Potato___Late_blight',
    'Tomato___Tomato_mosaic_virus',
    'Strawberry___healthy',
    'Apple___healthy',
    'Grape___Black_rot',
    'Potato___Early_blight',
    'Cherry_(including_sour)___healthy',
    'Corn_(maize)___Common_rust_',
    'Grape___Esca_(Black_Measles)',
    'Raspberry___healthy',
    'Tomato___Leaf_Mold',
    'Tomato___Spider_mites Two-spotted_spider_mite',
    'Pepper,_bell___Bacterial_spot',
    'Corn_(maize)___healthy'
]

# IMPORTANT:
# Add ALL your classes from train.classes here


# -----------------------------
# LOAD MODEL
# -----------------------------

model = CNN_NeuralNet(3, len(classes))

model.load_state_dict(
    torch.load(MODEL_PATH, map_location=torch.device("cpu"))
)

model.eval()


# -----------------------------
# IMAGE TRANSFORM
# -----------------------------

transform = transforms.Compose([
    transforms.Resize((256, 256)),
    transforms.ToTensor(),
])


# -----------------------------
# PREDICTION FUNCTION
# -----------------------------

def predict_image(image_file):

    image = Image.open(image_file).convert("RGB")

    image = transform(image).unsqueeze(0)

    with torch.no_grad():

        outputs = model(image)

        probabilities = torch.softmax(outputs[0], dim=0)

        confidence, predicted = torch.max(probabilities, 0)

    predicted_class = classes[predicted.item()]

    return {
        "prediction": predicted_class,
        "confidence": round(confidence.item() * 100, 2)
    }


def detect_disease(image_file):

    return predict_image(image_file)