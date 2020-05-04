package rnhms.utils;

import android.content.Context;
import android.util.Log;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.huawei.hms.api.HuaweiApiAvailability;

public class RNHMSUtils extends ReactContextBaseJavaModule {

    public RNHMSUtils(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "HmsUtils";
    }

    @ReactMethod
    public void isHmsAvailable(Promise promise) {
        boolean isAvailable = false;
        Context context = getReactApplicationContext();
        if (null != context) {
            int result = HuaweiApiAvailability.getInstance().isHuaweiMobileServicesAvailable(context);
            isAvailable = (com.huawei.hms.api.ConnectionResult.SUCCESS == result);
        }
        Log.i("HMS Utils", "isHmsAvailable: " + isAvailable);

        promise.resolve(isAvailable);

    }
}
