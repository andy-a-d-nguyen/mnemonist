/**
 * Mnemonist Library Endpoint (CommonJS)
 * ======================================
 *
 * Exporting every data structure through a unified endpoint. Consumers
 * of this library should prefer the modular access though.
 */
var Heap = require('./heap.js'),
    FibonacciHeap = require('./fibonacci-heap.js'),
    SuffixArray = require('./suffix-array.js'),
    Vector = require('./vector.js');

module.exports = {
  BiMap: require('./bi-map.js'),
  BitSet: require('./bit-set.js'),
  BitVector: require('./bit-vector.js'),
  BloomFilter: require('./bloom-filter.js'),
  BKTree: require('./bk-tree.js'),
  CircularBuffer: require('./circular-buffer.js'),
  DefaultMap: require('./default-map.js'),
  DefaultWeakMap: require('./default-weak-map.js'),
  FixedDeque: require('./fixed-deque.js'),
  StaticDisjointSet: require('./static-disjoint-set.js'),
  FibonacciHeap: FibonacciHeap,
  MinFibonacciHeap: FibonacciHeap.MinFibonacciHeap,
  MaxFibonacciHeap: FibonacciHeap.MaxFibonacciHeap,
  FixedReverseHeap: require('./fixed-reverse-heap.js'),
  FuzzyMap: require('./fuzzy-map.js'),
  FuzzyMultiMap: require('./fuzzy-multi-map.js'),
  HashedArrayTree: require('./hashed-array-tree.js'),
  Heap: Heap,
  MinHeap: Heap.MinHeap,
  MaxHeap: Heap.MaxHeap,
  StaticIntervalTree: require('./static-interval-tree.js'),
  InvertedIndex: require('./inverted-index.js'),
  KDTree: require('./kd-tree.js'),
  LinkedList: require('./linked-list.js'),
  LRUCache: require('./lru-cache.js'),
  LRUCacheWithDelete: require('./lru-cache-with-delete.js'),
  LRUMap: require('./lru-map.js'),
  LRUMapWithDelete: require('./lru-map-with-delete.js'),
  MultiMap: require('./multi-map.js'),
  MultiSet: require('./multi-set.js'),
  PassjoinIndex: require('./passjoin-index.js'),
  Queue: require('./queue.js'),
  FixedStack: require('./fixed-stack.js'),
  Stack: require('./stack.js'),
  SuffixArray: SuffixArray,
  GeneralizedSuffixArray: SuffixArray.GeneralizedSuffixArray,
  set: require('./set.js'),
  SparseQueueSet: require('./sparse-queue-set.js'),
  SparseMap: require('./sparse-map.js'),
  SparseSet: require('./sparse-set.js'),
  SymSpell: require('./symspell.js'),
  Trie: require('./trie.js'),
  TrieMap: require('./trie-map.js'),
  Vector: Vector,
  Uint8Vector: Vector.Uint8Vector,
  Uint8ClampedVector: Vector.Uint8ClampedVector,
  Int8Vector: Vector.Int8Vector,
  Uint16Vector: Vector.Uint16Vector,
  Int16Vector: Vector.Int16Vector,
  Uint32Vector: Vector.Uint32Vector,
  Int32Vector: Vector.Int32Vector,
  Float32Vector: Vector.Float32Vector,
  Float64Vector: Vector.Float64Vector,
  PointerVector: Vector.PointerVector,
  VPTree: require('./vp-tree.js')
};
