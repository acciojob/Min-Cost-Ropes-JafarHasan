function mincost(arr)
{ 
//write your code here
// return the min cost
	cont heap=[...arr];
	heap.sort((a,b)=>a-b);//min heap
	let totalCost = 0;

	while(head.length>1){
		const first=heap.shift();
		const second=heap.shift();
		const cost=first+second;
		totalCost+=cost;

		heap.push(cost);
		heap.sort((a,b)=>a-b);//re sort to maintain min heap 
	}
  
}

module.exports=mincost;
