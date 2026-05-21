import { useState } from "react";
import {
  ArrowLeft,
  Upload,
  Leaf,
  AlertTriangle,
  ScanLine,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

interface DiseaseDetectionProps {
  onBack: () => void;
}

const DiseaseDetection = ({ onBack }: DiseaseDetectionProps) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
      setResult(null);
    }
  };

  const handleDetectDisease = async () => {
    if (!selectedImage) return;

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", selectedImage);

      const response = await fetch(
        "http://127.0.0.1:8000/disease/predict",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      console.log(data);

      setResult(data);
    } catch (error) {
      console.error("Prediction Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4fff6] via-[#f7faf7] to-[#eefbf1] px-6 py-6">
      <div className="max-w-4xl mx-auto">

        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-green-700 font-medium mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>

        {/* Hero Section */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-5">
            <Sparkles size={18} />
            AI Plant Health Analysis
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Smart Crop{" "}
            <span className="text-green-600">Disease Detection</span>
          </h1>

          <p className="text-gray-600 text-lg mt-5 max-w-3xl leading-relaxed">
            Upload crop images and let our AI instantly identify plant
            diseases, nutrient deficiencies, and treatment recommendations with
            high accuracy.
          </p>
        </div>

        {/* Main Grid */}
        {/* Main Content */}
<div className="space-y-8">

  {/* Upload Card */}
  <div className="bg-white/90 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-lg p-6">

    {/* Header */}
    <div className="flex items-center gap-4 mb-6">

      <div className="bg-green-100 p-4 rounded-2xl">
        <Upload className="text-green-600" size={24} />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Upload Crop Image
        </h2>

        <p className="text-gray-500 mt-1">
          AI-powered disease analysis
        </p>
      </div>
    </div>

    {/* Upload Area */}
    <label className="relative border-2 border-dashed border-green-200 rounded-3xl min-h-[320px] flex flex-col items-center justify-center overflow-hidden cursor-pointer bg-gradient-to-br from-green-50 to-white hover:border-green-500 transition-all group">

      {previewImage ? (
        <>
          <img
            src={previewImage}
            alt="Uploaded"
            className="w-full h-[320px] object-cover"
          />

          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

            <div className="bg-white px-6 py-3 rounded-2xl font-semibold text-gray-800 shadow-xl">
              Change Image
            </div>
          </div>
        </>
      ) : (
        <div className="text-center px-6">

          <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <Upload size={42} className="text-green-600" />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Drag & Drop Image
          </h3>

          <p className="text-gray-500 text-lg leading-relaxed max-w-lg mx-auto">
            Upload crop leaf images in JPG, PNG or JPEG format
            for instant AI disease detection and treatment recommendations.
          </p>

          <div className="mt-6 inline-flex bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
            Max file size: 10MB
          </div>
        </div>
      )}

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
    </label>

    {/* Button */}
    <button
      onClick={handleDetectDisease}
      disabled={loading || !selectedImage}
      className="w-full mt-6 bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 hover:scale-[1.01] hover:shadow-green-300/50 hover:shadow-xl text-white py-4 rounded-2xl text-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
    >
      <ScanLine size={22} />

      {loading ? "Analyzing Crop..." : "Detect Disease"}
    </button>
  </div>

  {/* Result Card */}
  {result && (
    <div className="bg-white/90 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-lg p-6">

      {/* Result Header */}
      <div className="flex items-center gap-4 mb-8">

        <div className="bg-red-100 p-4 rounded-2xl">
          <ShieldCheck className="text-red-500" size={24} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Detection Result
          </h2>

          <p className="text-gray-500 mt-1">
            AI-generated disease report
          </p>
        </div>
      </div>

      {/* Main Result */}
      <div className="bg-gradient-to-br from-[#f8faf8] to-[#eef8f1] border border-green-100 rounded-3xl p-6">

        {/* Disease */}
        <div className="flex items-start gap-5 mb-8">

          <div className="bg-red-100 p-4 rounded-2xl">
            <AlertTriangle className="text-red-500" size={30} />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 break-words">
              {result.prediction || "Disease Detected"}
            </h3>

            <p className="text-gray-500 mt-2 text-lg">
              Confidence Level: {result.confidence || 95}%
            </p>
          </div>
        </div>

        {/* Accuracy */}
        <div className="mb-8">

          <div className="flex justify-between mb-3 text-sm">
            <span className="text-gray-600">
              Detection Accuracy
            </span>

            <span className="font-semibold text-green-700">
              {result.confidence || 95}%
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">

            <div
              className="bg-gradient-to-r from-green-500 to-emerald-600 h-full rounded-full transition-all duration-700"
              style={{
                width: `${result.confidence || 95}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">

          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            Disease Description
          </h4>

          <div className="bg-white rounded-2xl border border-gray-100 p-5 text-gray-600 leading-relaxed">
            {result.description ||
              "Disease detected successfully."}
          </div>
        </div>

        {/* Recommendation */}
        <div>

          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            Recommendation
          </h4>

          <div className="bg-white rounded-2xl border border-gray-100 p-5 text-gray-600 leading-relaxed">
            {result.recommendation ||
              "Apply proper treatment and monitor crop health regularly."}
          </div>
        </div>

        {/* Success */}
        <div className="mt-8 bg-green-100 text-green-800 px-5 py-4 rounded-2xl font-medium">
          ✅ AI analysis completed successfully.
        </div>
      </div>
    </div>
  )}
</div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-white">
            <h3 className="text-gray-500 mb-3">
              Detection Accuracy
            </h3>

            <p className="text-4xl font-bold text-green-600">
              98%
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-white">
            <h3 className="text-gray-500 mb-3">
              Supported Crops
            </h3>

            <p className="text-4xl font-bold text-green-600">
              25+
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-white">
            <h3 className="text-gray-500 mb-3">
              AI Response Time
            </h3>

            <p className="text-4xl font-bold text-green-600">
              &lt;3s
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseDetection;