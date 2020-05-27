import Recommended = require("./Configuration/Recommended");
import RecommendedWithTypeChecking = require("./Configuration/RecommendedWithTypeChecking");
import Weak = require("./Configuration/Weak");
import WeakWithTypeChecking = require("./Configuration/WeakWithTypeChecking");

export = {
    configs: {
        recommended: Recommended,
        "recommended-requiring-type-checking": RecommendedWithTypeChecking,
        weak: Weak,
        "weak-requiring-type-checking": WeakWithTypeChecking
    }
};
