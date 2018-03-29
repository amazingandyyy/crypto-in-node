import { ec as EC } from 'elliptic';
import SHA256 from 'crypto-js/sha256';
import uuid from './uuid';

const ec = new EC('secp256k1');
// sec-p-256-k-1
// sec     stands for standards of efficient cryptography
// p       stands for prime
// 256     stands for a 256 bits(32 bytes) prime number used to generate the curve in the elliptic algorithm
// k       stands for copilots which is the name of a notable mathematician in the cryptography field
// 1       stands for this being the first imitation of the Kirt algorithm in the standard

class Util {
  static genKeyPair() {
    return ec.genKeyPair();
  }
  static tixId() {
    return uuid();
  }
  static hash(data) {
    return SHA256(JSON.stringify(data)).toString();
  }

  static verifySignature(publicKey, signature, dataHash) {
    return ec.keyFromPublic(publicKey, 'hex').verify(dataHash, signature);
  }
}

export default Util;