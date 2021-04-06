import { JSendOptions } from "./JSendOptions";
import { JSendBaseSerializationStrategy } from "./JSendSerializationStrategies/JSendBaseSerializationStrategy";

/*====================*/

class JSendSerializer {
  private JSendSerializerStrategy;

  public constructor() {
    this.JSendSerializerStrategy = new JSendBaseSerializationStrategy();
  }

  public successResponse(data: any) {
    return new JSendOptions(this.JSendSerializerStrategy.successResponse(data));
  }

  public failResponse(errors: any) {
    return new JSendOptions(this.JSendSerializerStrategy.failResponse(errors));
  }

  public errorResponse(message: string) {
    return new JSendOptions(
      this.JSendSerializerStrategy.errorResponse(message)
    );
  }
}

/*====================*/

export default JSendSerializer;
