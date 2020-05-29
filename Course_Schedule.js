var canFinish = function(n, p) {
    let out = new Array(n).fill(0);
    let count =0;
    let stack =[];
    for(let i=0;i<p.length;i++){
        out[p[i][0]]++;
    }
    for(let i=0;i<out.length;i++){
        if(out[i]===0){
            stack.push(i)
        }
    }
    
    while(stack.length!==0){
        count++;
        let cur = stack.pop();
        
        for(let i=0;i<p.length;i++){
            if(p[i][1]==cur){
                out[p[i][0]]--;
                if( out[p[i][0]]===0){
            stack.push(p[i][0])
        }
            }
            
        }
    }
    
    
    return count == n;
};