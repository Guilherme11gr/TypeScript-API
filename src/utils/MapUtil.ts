class MapUtil {
  static mapToObject(map: Map<any, any>): Object {
    const obj = {};
    map.forEach((v: any, k: any) => obj[k] = v);
    return obj;
  };

  static objectToMap(obj: Object) {
    const map = new Map;
    Object.keys(obj).forEach(k => map.set(k, obj[k]));
    return map;
  };
}